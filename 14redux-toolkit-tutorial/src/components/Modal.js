/* syzdavame modal (iskane na potvyrzhdenie dali potrebitelqt iska da premahne vsichki item-i
ot koshicata si). Zapochvame taka */
const Modal = () => {
    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn'>
                        confirm
                    </button>
                    <button type='button' className='btn clear-btn'>
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;