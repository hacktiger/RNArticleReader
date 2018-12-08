import { ArticleReaderGateway } from '../../configs/myGateway'
//
import {PATH_USER, PATH_ARTICLE, PATH_COMMENT} from '../../res/paths'
//
export default class ArticleDataService {
  getAllComment () {
    return ArticleReaderGateway.get(`${PATH_COMMENT}`);
  }

  postComment (body) {
    return ArticleReaderGateway.post(`${PATH_COMMENT}`, body)
  }

  getCommentByArticleId (article_id) {
    return ArticleReaderGateway.get(`${PATH_COMMENT}${PATH_ARTICLE}/${user_id}`);
  }

  getCommentByUserId (user_id){
    return ArticleReaderGateway.get(`${PATH_COMMENT}${PATH_USER}/${user_id}`);
  }

  deleteCommentById (user_id) {
    return ArticleReaderGateway.delete(`${PATH_COMMENT}/${user_id}`);
  }
}