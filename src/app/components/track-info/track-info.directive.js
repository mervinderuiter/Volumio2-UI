class TrackInfoDirective {
  constructor(themeManager) {
    'ngInject';
    let directive = {
      restrict: 'E',
      templateUrl: themeManager.getHtmlPath('track-info', 'components/track-info'),
      controller: TrackInfoController,
      controllerAs: 'trackInfo',
      bindToController: true,
      scope: {
        isInFooter: "@"
      }
    };
    return directive;
  }
}

class TrackInfoController {
  constructor($scope, playerService, $state) {
    'ngInject';
    this.$scope = $scope;
    this.playerService = playerService;
    this.state = $state;

    this.isInFooter = this.$scope.isInFooter || false;
  }


}

export default TrackInfoDirective;
