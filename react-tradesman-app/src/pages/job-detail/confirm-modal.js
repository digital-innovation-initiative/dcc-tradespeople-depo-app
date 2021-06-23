
import A, { LinkA } from '../../components/A';
import MinimalModal from '../../components/modal';

const ConfirmModal = ({ onHide }) => {
  return (
    <MinimalModal.Dialog>
      <MinimalModal.Header>
        Confirm Completion
      </MinimalModal.Header>
      <MinimalModal.Body>
        Once you report a job as finished the job will be closed.
        Please finish any relevant checks before you mark the job as complete.
      </MinimalModal.Body>
        <MinimalModal.Footer>
          <div className='col-auto'>
            <A onClick={() => onHide()}>
              Cancel
            </A>
          </div>
          <div className='col-auto'>
            <LinkA to='/dashboard?toast=true'>
              Confirm
            </LinkA>
          </div>
        </MinimalModal.Footer>
    </MinimalModal.Dialog>
  );
};

export default ConfirmModal;
