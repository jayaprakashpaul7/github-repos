// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {lang, updateId} = props
  const {id, language} = lang

  const onClickFilter = () => {
    updateId(id)
  }

  return (
    <li className="lang-li">
      <button onClick={onClickFilter}>{language}</button>
    </li>
  )
}
export default LanguageFilterItem
