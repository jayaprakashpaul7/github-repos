// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repository} = props
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = repository
  return (
    <li>
      <img src={avatarUrl} className="avatar" alt={name} />
      <h1 className="name">{name}</h1>
      <div className="stars-c">
        <div className="div-child">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            className="image"
            alt="stars"
          />
          <p>{starsCount}</p>
        </div>
        <div className="div-child">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            className="image"
            alt="forks"
          />
          <p>{forksCount}</p>
        </div>
        <div className="div-child">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            className="image"
            alt="open issues"
          />
          <p>{issuesCount}</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
