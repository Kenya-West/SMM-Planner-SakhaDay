import { ElementCollection, ElementFind, GetElementCollection } from "../element-find/element-find";

export class FixText {
    public static fix() {
        const editor = new ElementFind().getSingle(GetElementCollection.get(ElementCollection.Editor));

        let text = FixText.fixQuotes(editor.innerText);
        text = FixText.fixBannedOrgs(text);

        editor.innerText = text;
    }

    private static fixQuotes(text: string): string {
        let textModified = text;
        textModified = textModified.replace(/(\s|^|\n|\(|\[|\{)\"(.)/gi, "$1«$2");
        textModified = textModified.replace(/(.)\"(\s|^|\n|\(|\[|\{|\.|\,|\?|\!|\:|\;|\-)/gi, "$1»$2");

        return textModified;
    }

    private static fixBannedOrgs(text: string): string {
        const regex = /(^|\s|\n|"|«)(?!\*)(Meta|Facebook|Instagram|Мета|Фейсбук|ФБ|FB|Инстаграм|Инста|Insta)(?!\*)/gi;

        let textModified = text;

        const isMentioned = regex.test(textModified);

        function replaceCondition(capturedGroups: RegExpExecArray): string {
            if (/^|\s|\n|"|«/gi.test(capturedGroups[1])) {
                return "$1$2*"
            } else {
                if (/^|\s|\n|"|«/gi.test(capturedGroups[2])) {
                    return "$2$3*"
                } else {
                    return capturedGroups[3] ? "$3*" : "$2*"
                }
            }
        }

        if (isMentioned) {
            const capturedGroups = regex.exec(textModified);

            // on just one word it doesn't have a "$3*"
            textModified = textModified.replace(regex, replaceCondition(capturedGroups));

            if (!textModified.match(/\* соцсеть запрещена в РФ и признана экстремистской(\.|$|\n)/gi)) {
                textModified += "\n\n\* соцсеть запрещена в РФ и признана экстремистской"
            }
        }

        return textModified;
    }
}