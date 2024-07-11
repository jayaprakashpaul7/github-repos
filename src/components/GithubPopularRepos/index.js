import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFilterData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeOptionId: languageFilterData[0].id, repos: [], isLoading: true}

  componentDidMount() {
    this.getPopularRepos()
  }

  getPopularRepos = async () => {
    const {activeOptionId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeOptionId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const update = {
        popularRepos: data.popular_repos,
      }
      console.log(update.popularRepos)
      const updatedData = update.popularRepos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({repos: updatedData, isLoading: false})
    }
  }

  updateId = id => {
    this.setState({activeOptionId: id}, this.getPopularRepos)
  }

  render() {
    const {repos, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1>Popular</h1>
        <ul className="header">
          {languageFilterData.map(eachItem => (
            <LanguageFilterItem
              lang={eachItem}
              updateId={this.updateId}
              key={eachItem.id}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="items-c">
            {repos.map(eachRepository => (
              <RepositoryItem
                repository={eachRepository}
                key={eachRepository.id}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
