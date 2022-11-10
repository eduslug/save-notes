import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CratArea(props) {

    const [expande, setExpande] = useState(false);

    function expandir() {

        setExpande(true)
    }

    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    function handleChange(event) {

        const { name, value } = event.target;
        setNote((preveNote) => {
            return {
                ...preveNote, [name]: value
            }
        });
    }
    function submiteNota(event) {
        event.preventDefault()
        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <div >
            <form>

                {
                    expande ? <input name="title"
                        value={note.title}
                        placeholder="Titulo"
                        onChange={handleChange}
                    /> : null
                }
                <textarea name="content"
                    value={note.content}
                    placeholder="Descrição do card"
                    role={'1'}
                    onChange={handleChange}
                    onClick={expandir}
                    rows={expande ? 3 : 1}
                />
                <Zoom in={true}>
                    <button onClick={submiteNota}><AddIcon /></button>
                </Zoom>
            </form>
        </div>
    )
};

export default CratArea;