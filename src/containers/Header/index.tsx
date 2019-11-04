import { useState } from 'react';
import wrapper from '../../utils/wrapper'

import { Header } from '../../components'

const WrappedEditor = () => {
    const [val, setVal] = useState(0)
    const States = { val }
    const Actions = { setVal }

    return wrapper(Header, States, Actions)
}

export default WrappedEditor