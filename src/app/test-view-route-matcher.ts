import {
  convertToParamMap,
  Route,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';

export function testViewRouteMatcher(
  segments: readonly UrlSegment[],
  group: UrlSegmentGroup,
  route: Route
): UrlMatchResult {
  const newSegments = segments.map(
    (urlSegment) =>
      new UrlSegment(
        urlSegment.path.replace('.html', ''),
        urlSegment.parameters
      )
  );
  const urlPaths = newSegments.map((newUrlSegment) => newUrlSegment.path);
  const childPaths = (route.children || []).map(
    (childRoute) => childRoute.path
  );

  return {
    consumed: newSegments,
    posParams: {
      seoUrl: {
        path: urlPaths.join('/'),
        parameters: {},
        parameterMap: convertToParamMap({}),
      },
    },
  };
}
