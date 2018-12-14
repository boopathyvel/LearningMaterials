import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
    getArticle, 
    clap,
    follow
} from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        _article: state.articles.article,
        user: state.authUser.user    
    }
}
class ArticleView extends Component {


}

export default connect(mapStateToProps, { 
    getArticle,
    clap,
    follow
})(ArticleView);