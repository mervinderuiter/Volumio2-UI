class BrowseScrollManagerDirective {
  constructor(browseService, matchmediaService) {
    'ngInject';
    this.browseService = browseService;
    this.matchmediaService = matchmediaService;

    let directive = {
      restrict: 'A',
      scope: false,
    };

    return directive;
  }

  setScrollTop() {
    // $log.debug(this.browseService.scrollPositions);
    let currentFetchRequest = this.browseService.currentFetchRequest;
    if (currentFetchRequest && currentFetchRequest.uri &&
      this.browseService.scrollPositions.get(currentFetchRequest.uri)) {
      // $log.debug('Scroll to', currentFetchRequest.uri,
      //     this.browseService.scrollPositions.get(currentFetchRequest.uri));
      this.browseTablesWrapper.scrollTop = this.browseService.scrollPositions.get(currentFetchRequest.uri);
    } else {
      this.browseTablesWrapper.scrollTop = 0;
    }
  }  
}


export default BrowseScrollManagerDirective;
