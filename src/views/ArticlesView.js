import React, { Component } from 'react';
// import SearchForm from '../components/SearchForm';
// import newsApi from '../services/news-api';
 import axios from 'axios';

class ArticlesView extends Component {
    state = {
        hits: [],
    };
    
    componentDidMount() {
        axios.get('https:pixabay.com/api/?q=react&key=20314649-0be4b13706b99da5b0e7a5a44&image_type=photo&orientation=horizontal&per_page=12')
            .then(response => console.log(response.data.hits));
   
    }
    render() {
        return <h1>Статьи</h1>
    }
}

// const BASE_URL = 'https://pixabay.com/api/?';

// export default {
//   key: '14890929-23ffdef91aab059ee79f68fac',
//   perPage: 12,
//   imageType: 'photo',
//   orientation: 'horizontal',
//   page: 1,
//   query: '',
//   async fatchImages() {
//     const requestUrl = `q=${this.query}&page=${this.page}&key=${this.key}&image_type=${this.imageType}&orientation=${this.orientation}&per_page=${this.perPage}`;
//     const response = await fetch(BASE_URL + requestUrl);
//     const parsedResponse = await response.json();
//     const hits = await parsedResponse.hits;
//     return { hits };
//   },
//   searchQuery(string) {
//     this.query = string;
//   },
//   incrementPage() {
//     this.page += 1;
//   },
//   resetPage() {
//     this.page = 1;
//   },
// };

 export default ArticlesView;
// 20314649-0be4b13706b99da5b0e7a5a44
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

// class ArticlesView extends Component {
//   state = {
//     articles: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchArticles();
//     }
//   }

//   onChangeQuery = query => {
//     this.setState({
//       searchQuery: query,
//       currentPage: 1,
//       articles: [],
//       error: null,
//     });
//   };

//   fetchArticles = () => {
//     const { currentPage, searchQuery } = this.state;
//     const options = { searchQuery, currentPage };

//     this.setState({ isLoading: true });

//     newsApi
//       .fetchArticles(options)
//       .then(articles => {
//         this.setState(prevState => ({
//           articles: [...prevState.articles, ...articles],
//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { articles, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

//     return (
//       <div>
//         {error && <h1>Ой ошибка, всё пропало!!!</h1>}

//         <SearchForm onSubmit={this.onChangeQuery} />

//         <ul>
//           {articles.map(({ title, url }) => (
//             <li key={title}>
//               <a href={url}>{title}</a>
//             </li>
//           ))}
//         </ul>

//         {isLoading && <h1>Загружаем...</h1>}

//         {shouldRenderLoadMoreButton && (
//           <button type="button" onClick={this.fetchArticles}>
//             Загрузить ещё
//           </button>
//         )}
//       </div>
//     );
//   }
// }

