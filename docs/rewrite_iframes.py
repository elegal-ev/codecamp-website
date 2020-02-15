#!/usr/bin/env python3

import sys
import re

rgx_pttrn = r"\<iframe.+\<\/iframe\>"

with open(sys.argv[1], 'r', encoding='utf-8') as file:
    text = file.read()
    matches = re.finditer(rgx_pttrn, text, re.MULTILINE)

    for matchNum, match in enumerate(matches, start=1):
        new_str = """
            <Tabs defaultValue="repl"
            values={
                    [
                        {label: 'Python Interpreter', value: 'repl'},
                        {label: 'Python Code', value: 'py'}
                    ]
            }>
                <TabItem value="repl">
                    """ + str(match.group()) + """
                </TabItem>
                <TabItem value="py">

                ```python
                # Hallo
                ```

                </TabItem>
            </Tabs>"""
        replaced = re.sub(str(match.group()), new_str, text)
        print(replaced)
