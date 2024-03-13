import { useState } from 'react';

const Button = () => {
    const [state, setState] = useState(0);

    return (
        <div>
            <button class="shared-btn"
                onClick={() => setState((s) => s + 1)}>
                Click me: {state}
            </button>
        </div>
    );
}

export default Button;