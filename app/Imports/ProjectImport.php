<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ProjectImport implements ToCollection, WithHeadingRow
{
    use Importable;
    public $collection;
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {
        $this->collection = $collection->transform(function ($row) {
            return [
                'rank' => $row[0],
                'name' => $row[1],
            ];
        });
        dd($rows);
    }
}
