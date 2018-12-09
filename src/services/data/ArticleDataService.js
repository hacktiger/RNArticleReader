import { ArticleReaderGateway } from '../../configs/myGateway'
//
import { PATH_ARTICLE } from '../../res/paths/Path'
//
export default class ArticleDataService {
  getAllArticle () {
    return ArticleReaderGateway.get(`${PATH_ARTICLE}`);
  }

  postArticle (title, body, userid) {
    return ArticleReaderGateway.post(`${PATH_ARTICLE}?title=${title}&body=${body}&userid=${userid}`)
  }

  getArticleById (article_id) {
    return ArticleReaderGateway.get(`${PATH_ARTICLE}/${article_id}`);
  }

  putArticleById (article_id, body){
    return ArticleReaderGateway.put(`${PATH_ARTICLE}/${article_id}`, body)
  }

  deleteArticleById (article_id) {
    return ArticleReaderGateway.delete(`${PATH_ARTICLE}/${article_id}`);
  }
}