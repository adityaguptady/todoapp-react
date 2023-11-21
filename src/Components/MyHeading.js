import styles from '../Styling/MyHeader.module.css'

function MyHeading(props)
{

    return(<h1 style={styles.MyHeading}>{props.title}</h1>)
}
export default MyHeading;