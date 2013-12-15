function MainCtrl($scope, $sce) {
    $scope.regex = '\\b(\\w+\\.?)+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}\\b';
    $scope.flags = 'gim';

    $scope.results = [];
    $scope.highlightedResults = '';

    $scope.applyRegex = function()
    {
        $scope.error = '';
        $scope.results = [];
        $scope.highlightedResults = '';

        try
        {
            var regex = new RegExp('(' + $scope.regex + ')', $scope.flags);
            $scope.results = $scope.stringToTest.match();
            $scope.highlightedResults = $sce.trustAsHtml($scope.stringToTest.replace(regex, '<b style="color: #FFF; background-color: green;" class="mrg-xs pdg-xs brd-rad-sm">$1</b>'));
            console.log($scope.highlightedResults);
        }
        catch(e)
        {
            $scope.error = e.message;
        }
    }

    $scope.stringToTest = "This text contains email adresses:"
            + "\nbill.clinton@gmail.com"
            + "\nHere is another: barack.obama@gmail.com"
            + "\nThese won't match: sylvester@@gmail.com"
            + "\nNeither sylvester@gmail.computer" ;

    $scope.applyRegex();
}