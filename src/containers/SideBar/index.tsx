import { useState } from 'react';
import wrapper from '../../utils/wrapper'

import { SideBar } from '../../components'

const WrappedEditor = () => {
    const [val, setVal] = useState(0)
    const States = { val }
    const Actions = { setVal }

    return wrapper(SideBar, States, Actions)
}

export default WrappedEditor