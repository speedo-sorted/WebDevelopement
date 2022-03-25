import ReactDOM from 'react-dom';
import './Example.scss';

const Example = () => {

    
    return (
        <article className='compo'>
            {ReactDOM.createPortal(<div className='child'></div>, document.getElementById('main'))}
        </article>
    );

}
export default Example;