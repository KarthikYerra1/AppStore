import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-detail">
      <img src={imageUrl} className="app-icon" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
