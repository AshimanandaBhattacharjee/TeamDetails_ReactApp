import React, { useState } from 'react';
import { Button } from '@mui/material';

export default function ClickCount() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
}