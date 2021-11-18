<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\Exportable; 
use Maatwebsite\Excel\Concerns\WithTitle; 

class ListExport implements FromCollection, WithHeadings, WithTitle
{
    use Exportable;
    protected $project;

    function __construct($project) {
        $this->project = $project;
    }

    public function headings(): array
    {
        return [
            'id',
            'title',
            'start',
            'end',
            'mode'
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->project->columns;
    }

    public function title(): string
    {
        return 'lists';
    }
}
