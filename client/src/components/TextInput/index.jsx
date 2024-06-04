import React, { useRef, useEffect, useState } from 'react';
import { useFormikContext, useField } from 'formik';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function TextInput(props) {
    const textareaRef = useRef();
    const { values, touched, setFieldValue } = useFormikContext();
    const [field, meta] = useField(props);
    const [selection, setSelection] = useState({});
    
    useEffect(() => {
        if (selection.start && selection.end) {
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(selection.start, selection.end);
        }
    }, [selection]);

    const cutText = () => {
        const firstText = values[props.name].slice(0, textareaRef.current.selectionStart);
        const remainderText = values[props.name].slice(textareaRef.current.selectionStart);

        return { firstText, remainderText };
    };

    const addCode = () => {
        const { firstText, remainderText } = cutText();

        setFieldValue(props.name, firstText + '\n```\ncode\n```' + remainderText);
        setSelection({ start: textareaRef.current.selectionStart + 5, end: textareaRef.current.selectionStart + 9 });
    };

    const addQuote = () => {
        const { firstText, remainderText } = cutText();

        setFieldValue(props.name, firstText + '\n\n>quote \n' + remainderText);
        setSelection({ start: textareaRef.current.selectionStart + 3, end: textareaRef.current.selectionStart + 8 });
    };

    const addBold = () => {
        const { firstText, remainderText } = cutText();

        setFieldValue(props.name, firstText + '**bold**' + remainderText);
        setSelection({ start: textareaRef.current.selectionStart + 2, end: textareaRef.current.selectionStart + 6 });
    };

    return <>
        <section>
            <div>
                <button type='button' title='Code' onClick={addCode}>
                    <img alt="code logo" />
                </button>

                <button type='button' title='Quote'>
                    <img onClick={addQuote} alt="quote logo" />
                </button>

                <button type='button' title='Bold'>
                    <img onClick={addBold} alt="bold text logo" />
                </button>
            </div>

            <textarea ref={textareaRef} {...props} {...field}/>

            
        </section>

        <div>
            {
                meta.touched && 
                meta.error && 
                <span>
                    {meta.error}
                </span>
            }
        </div>

        {   
            values[props.name] !== '' &&
            <section>
                <h1>Preview</h1>

                <pre>
                    <ReactMarkdown>
                        {values[props.name]}
                    </ReactMarkdown>
                </pre>
            </section>
        }
    </>
}

export default TextInput;