import Form from '../../components/Form/Form.jsx';
import clsx from 'clsx';
import css from './Registration.module.css';

function Registration() {
  return (
    <section className={clsx(css['form-container'], 'container')}>
      <h2 className="visually-hidden">Registration</h2>
      <Form />
    </section>
  );
}

export default Registration;
