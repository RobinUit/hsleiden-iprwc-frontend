import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, filterRows: string[]): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    var filteredItems: any[] = items;
    var filteredItemsList: any[][] = new Array;
    var allFilteredItems: any[] = new Array;

    filterRows.forEach((row: string) => {
      filteredItems = items.filter((item: Object) => {
        var rowItem: string = item[row];
        return rowItem.toLowerCase().includes(searchText);
      })
      filteredItemsList.push(filteredItems)
    })

    filteredItemsList.forEach((items: any[]) => {      
      items.forEach((item: any) => {
        if (!allFilteredItems.includes(item)) {
          allFilteredItems.push(item);
        }
      })
    })

    return allFilteredItems;
  }
}