import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default class CodeBlock extends React.Component {
    render() {
        return (
            <Tabs defaultValue="repl"
                values={
                    [
                        { label: 'Python Interpreter', value: 'repl' },
                        { label: 'Python Code', value: 'py' }
                    ]
                }>
                <TabItem value="repl">

                    <iframe src={this.props.frame} width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </TabItem>
                <TabItem value="py">

                    {this.props.children}

                </TabItem>
            </Tabs>
        );
    }
}
