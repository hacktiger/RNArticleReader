import ArticleDataService from '../services/data/ArticleDataService';
//
const ArticleEntity = new ArticleDataService();

export default class ArticleController {
  getAllArticle () {
    return ArticleEntity.getAllArticle()
      .then(res => this._handleResponse(res))
      .catch(err => this._handleError(err))
  }

  postArticle (data) {
    let { title, body, userid } = data

    return ArticleEntity.postArticle(title, body, userid)
      .then(res => this._handleResponse(res))
      .catch(err => this._handleError(err))
  }

  _handleResponse (res) {
    return res;
  }

  _handleError (err) {
    console.log('ArticleController.js ', err);
  }
}