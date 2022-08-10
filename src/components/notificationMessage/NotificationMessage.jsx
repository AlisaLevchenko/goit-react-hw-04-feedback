import s from './NotificationMessage.module.css';

function NotificationMessage(props) {
  return (
    <div>
      <h2 className={s.notification}>{props.title}</h2>
    </div>
  );
}
export default NotificationMessage;
