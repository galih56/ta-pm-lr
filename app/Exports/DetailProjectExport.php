<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use App\Exports\ListExport;
use App\Exports\TaskExport;
use App\Exports\ProjectExport;

class DetailProjectExport implements WithHeadingRow, WithMultipleSheets
{
    use Exportable;
    protected $project;

    function __construct($project) {
        $this->project = $project;
    }

   
    public function sheets(): array
    {
        $project=$this->project;
        return [
            'detail-project' => new ProjectExport($project),
            'lists' => new ListExport($project),
            'tasks' => new TaskExport($project),
        ];
    }
}
