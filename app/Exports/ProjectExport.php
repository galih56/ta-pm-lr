<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\AfterSheet;

// WithColumnFormatting, WithEvents
class ProjectExport implements FromView,WithHeadingRow, WithTitle
{
    use Exportable;
    protected $project;

    function __construct($project) {
        $this->project = $project;
    }

    public function view(): View
    {
        $project=$this->project;
        return view('exports.project')->with(compact('project'));
    }
    /*
    public function registerEvents(): array
    {
        return [
            BeforeExport::class  => function(BeforeExport $event) {
                $event->sheet->setColumnFormat(array(
                    'B' => '0',
                    'C' => 'yyyy-mm-dd',
                    'D' => 'yyyy-mm-dd',
                    'F' => 'yyyy-mm-dd',
                    'G' => 'yyyy-mm-dd',
                ));
            },
        ]
    } 
     public function columnFormats(): array
    {
        return [
            'A' => DataType::TYPE_STRING,
            'B' => DataType::TYPE_STRING,
            'C' => DataType::TYPE_STRING,
            'D' => DataType::TYPE_STRING,
            'E' => DataType::TYPE_STRING,
            'F' => DataType::TYPE_STRING,
            'G' => DataType::TYPE_STRING,
            'H' => DataType::TYPE_STRING,
            'I' => DataType::TYPE_STRING,
            'J' => DataType::TYPE_STRING,
            'K' => DataType::TYPE_STRING,
            'L' => DataType::TYPE_STRING,
        ];
    }
    */   
    public function title(): string
    {
        return 'detail-project';
    }
    
}
