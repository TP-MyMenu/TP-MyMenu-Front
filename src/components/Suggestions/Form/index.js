import React, { useState } from 'react';

import Api from '../../../client/back';
import styles from './styles.module.scss';

const Form = () => {
  const [suggestion, setSuggestion] = useState();
  const [name, setName] = useState();

  const onSubmit = async () => {
    const info = { suggestion, client_name: name }
    await Api().post('api/suggestion/', info);
  };

  return (
    <div className={styles.box}>
        <h2 className={styles.title}>Dejanos tus sugerencias:</h2>
        <div className={styles.suggestionBox}>
            <textarea
              className={styles.sugestion}
              form="suggestions"
              rows="50"
              cols="10"
              type="text"
              name="Dejanos tus sugerencias:"
              onChange={e => setSuggestion(e.target.value)}
              value={suggestion}
            />
        </div>
        <div className={styles.nameBox}>
          <label>
            Nombre:
            <input
              className={styles.name}
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.submitBtnContainer}>
        <input className={styles.enviar}
          type="button" 
          value="Enviar"
          onClick={onSubmit}
        />
        </div>
    </div>
  );
};

export default Form;
