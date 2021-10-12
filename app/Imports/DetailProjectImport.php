<?php

namespace App\Imports;

use App\Models\TaskList;
use App\Models\Task;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use App\Imports\ProjectImport;
use App\Imports\TaskImport;
use App\Imports\ListImport;

class DetailProjectImport implements WithHeadingRow, WithMultipleSheets, SkipsUnknownSheets
{
    use Importable;
    use WithConditionalSheets;
    public $project;

    public function __construct($project)
    {
        $this->project=$project;
    }

    public function sheets(): array
    {
        return [
            'detail-project' => new ProjectImport(),
            'lists' => new ListImport(),
            'tasks' => new TaskImport(),
        ];
    }
    
    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }
    
    public function conditionalSheets(): array
    {
        return [
            'detail-project' => new DetailProjectImport(),
            'lists' => new ListImport(),
            'tasks' => new TaskImport(),
        ];
    }

    public function headingRow(): int
    {
        return 1;
    }
}
