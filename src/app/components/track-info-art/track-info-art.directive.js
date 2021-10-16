class TrackInfoArtDirective {
  constructor(themeManager) {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: themeManager.getHtmlPath('track-info-art', 'components/track-info-art'),
      controller: TrackInfoArtController,
      controllerAs: 'trackInfoArt',
      bindToController: true,
      scope: {
        isInFooter: "@"
      }
    };
    return directive;
  }
}

class TrackInfoArtController {
  constructor($scope, playerService, $state) {
    'ngInject';
    this.$scope = $scope;
    this.playerService = playerService;
    this.state = $state;

    this.isInFooter = this.$scope.isInFooter || false;
  }


}

export default TrackInfoArtDirective;
