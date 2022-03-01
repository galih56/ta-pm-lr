<?php

namespace App\Exports;

use App\Models\Project;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use PhpOffice\PhpSpreadsheet\Cell\DataType;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\RegistersEventListeners;
use Maatwebsite\Excel\Concerns\AfterSheet;
use Maatwebsite\Excel\Concerns\WithMapping;
use Carbon\Carbon;

class ProjectExport implements FromCollection,WithHeadings,WithHeadingRow, WithTitle,WithMapping
{
    use Exportable;
    protected $project;

    function __construct($project) {
        $this->project = $project;
    }

    public function collection()
    {
        return $this->project;
    }
    
    
    /**
    * @var $project
    */
    public function map($project): array
    {
        $data=[];
        foreach ($project->columns as $i => $column) {
            $i=$i+1;
            $list=$column->toArray();
            $list['wbs']=$i.'';
            if($list['start']) $list['start'] = Carbon::parse($list['start'])->format('d/m/Y');
            if($list['end']) $list['end'] = Carbon::parse($list['end'])->format('d/m/Y');
            $data[]=[
                'wbs'=>$list['wbs'], 'title'=>$list['title'],
                'start'=>$list['start'], 'end'=>$list['end'], 
                'progress'=>$list['progress'], 
            ];
            foreach ($column->cards as $j => $card) {
                $j=$j+1;
                $task=$card->toArray();
                $task['wbs']="$i.$j";
                if($task['start']) $task['start']= Carbon::parse($task['start'])->format('d/m/Y');
                if($task['end']) $task['end']= Carbon::parse($task['end'])->format('d/m/Y');
                if($task['actual_start']) $task['actual_start']= Carbon::parse($task['actual_start'])->format('d/m/Y');
                if($task['actual_end']) $task['actual_end']= Carbon::parse($task['actual_end'])->format('d/m/Y');    
                $data[]=[
                    'wbs'=>$task['wbs'], 'title'=>$task['title'],
                    'start'=>$task['start'], 'end'=>$task['end'], 'days'=>$task['days'],
                    'actual_start'=>$task['actual_start'], 'actual_end'=>$task['actual_end'],
                    'work_days' => $task['work_days'],
                ];
                foreach ($card->cards as $k => $sub_card) {
                    $k=$k+1;
                    $subtask=$sub_card->toArray();
                    $subtask['wbs']="$i.$j.$k";
                    if($subtask['start']) $subtask['start']= Carbon::parse($subtask['start'])->format('d/m/Y');
                    if($subtask['end']) $subtask['end']= Carbon::parse($subtask['end'])->format('d/m/Y');
                    if($subtask['actual_start']) $subtask['actual_start']= Carbon::parse($subtask['actual_start'])->format('d/m/Y');
                    if($subtask['actual_end']) $subtask['actual_end']= Carbon::parse($subtask['actual_end'])->format('d/m/Y');        
                    $data[]=[
                        'wbs'=>$subtask['wbs'], 'title'=>$subtask['title'],
                        'start'=>$subtask['start'], 'end'=>$subtask['end'], 'days'=>$subtask['days'],
                        'actual_start'=>$subtask['actual_start'], 'actual_end'=>$subtask['actual_end'],
                        'work_days' => $subtask['work_days'],
                    ];
                }
            }
        }
        return $data;
    }

    public function headings(): array
    {
        return [
            'wbs', 
            'title', 
            'start',
            'end',
            'days',
            'actual_start',
            'actual_end',
            'work_days',
        ];
    }

    public function title(): string
    {
        return 'detail-project';
    }
    
}
