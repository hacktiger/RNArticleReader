// imports
import createCloudConfigs from './configs'
import ApiGateway from '../services/models/ApiGateway'

// exporting new ApiGateways
export const ArticleReaderGateway = new ApiGateway(createCloudConfigs('article_reader'))

