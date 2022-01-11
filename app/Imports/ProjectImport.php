<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;

class ProjectImport implements ToCollection, WithHeadingRow, WithValidation
{
    use Importable;
    public $collection;

    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        // $this->collection = $collection->transform(function ($row) {
        //     return [
        //         'rank' => $row[0],
        //         'name' => $row[1],
        //     ];
        // });
        // return $this->collection;
    }
    
    public function rules(): array
    {
        return [
            'wbs' => [ 'required' ],
            'title' => [ 'required' ],
            'start' => [ 'required','date' ],
            'end' => [ 'required','date' ],
            'days' => [ 'required' ],
            'actual_start' => [ 'nullable','date' ],
            'actual_end' => [ 'nullable','date' ],
            'work_days' => [ 'nullable' ],
        ];
    }
}
