import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    changeTab(tabId)
  }

  const activeBtn = isActive ? 'active-btn' : ''
  const activeBtnUnderline = isActive ? 'active-underline' : ''

  return (
    <li className="item-tab">
      <button
        type="button"
        className={`btn ${activeBtn}`}
        onClick={onClickButton}
      >
        <p className="display-text">{displayText}</p>
      </button>
      <hr className={`line ${activeBtnUnderline}`} />
    </li>
  )
}

export default TabItem
