/* tslint:disable:variable-name */
export class TextMatches {
  object_url: string;
  object_type: string;
  property: string;
  fragment: string;
  matches: [
    {
      text: string;
      indices: [number, number]
    }
  ];
}
