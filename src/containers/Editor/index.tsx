import { useState } from 'react';
import wrapper from '../../utils/wrapper'

import { Editor } from '../../components'

const WrappedEditor = () => {
    const [val, setVal] = useState(0)
    const States = { val }
    const Actions = { setVal }

    return wrapper(Editor, States, Actions)
}

export default WrappedEditor