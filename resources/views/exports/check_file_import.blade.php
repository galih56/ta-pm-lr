 
@php

date_default_timezone_set("Asia/Jakarta"); 

function checkWBSFormat($row){  
    $wbs=explode('.',$row['wbs'].'');
    if($row['wbs'])
    $first_item=$wbs[array_key_first($wbs)];
    $last_item=$wbs[array_key_last($wbs)];
    if($first_item='' || $last_item=='') return false;
    for ($i=0; $i < count($wbs); $i++) { 
        $check=$wbs[$i];
        if(empty($check) || !is_numeric($check)){
            return false;
        }
    }
    return $wbs;
}


function validateDateTime($data)
{       
    try {
        $date=null;
        switch (gettype($data)) {
            case 'integer':
                $date=\Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($data))->format('d/m/Y');
                break;
            case 'string':
                $date=\Carbon\Carbon::createFromFormat('d/m/Y', $data)->format('d/m/Y');
                break;
            default:
                $date=\Carbon\Carbon::createFromFormat('d/m/Y', $data)->format('d/m/Y');
                break;
        }
        return $date;
    } catch (\Exception $e) {
        return null;
    }
}
    
$validated_data=[];
for ($i=0; $i < count($data); $i++) { 
    $row=$data[$i]->toArray();
    $row['invalid_columns']=[ 'wbs'=>false,'title'=>false,'description'=>false,'start'=>false,'end'=>false,'actual_start'=>false, 'actual_end'=>false,];  
    $start=validateDateTime($row['start']);
    $end=validateDateTime($row['end']);
    $actual_start=validateDateTime($row['actual_start']);
    $actual_end=validateDateTime($row['actual_end']);
    
    if(empty($row['wbs'])) {
        $row['invalid_columns']['wbs']=true;
    }

    if(empty($row['title'])) {
        $row['invalid_columns']['title']=true;
    }

    if(!$start || !$end) {
        $row['invalid_columns']['start']=true;
        $row['invalid_columns']['end']=true;
    }
    
    if(array_key_exists('actual_start',$row)){ 
        if(!empty($row['actual_start']) ){
            if(!$actual_start) {        
                $row['invalid_columns']['actual_start']=true;
            }
        }   
    }
    
    if(array_key_exists('actual_end',$row)){ 
        if(!empty($row['actual_end'])){
            if(!$actual_end) {
                $row['invalid_columns']['actual_end']=true;
            }
        }   
    }

    $wbs=checkWBSFormat($row);
    if(!$wbs){
        $row['invalid_columns']['actual_end']=true;
    }
    $row['start']=$start;
    $row['end']=$end;
    $row['actual_start']=$actual_start;
    $row['actual_end']=$actual_end;
    $validated_data[]=$row;
}   
@endphp 
<style>
    .invalid{
        background: cyan;
    }
    table,tbody{
        width:100%;
    }
    tr{
        border-top: 1px solid #b38585; 
        border-bottom: 1px solid #000000; 
        border-left: 1px solid #000000; 
        border-right: 1px solid #000000;
    }
    td{
        vertical-align: middle;
        background-color: #C5E0B4;
        border-top: 1px solid #b38585; 
        border-bottom: 1px solid #000000; 
        border-left: 1px solid #000000; 
        border-right: 1px solid #000000;
        color: #000000;
    }
</style>
<table>
    <thead>
        <tr>
            <th>No.</th>
            <th>wbs</th>
            <th>title</th>
            <th>start</th>
            <th>end</th>
            <th>actual_start</th>
            <th>actual_end</th>
            <th>description</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($validated_data  as $i => $row)
            <tr style="background-color:#e3e3e3">
                <td style="text-align: left;">{{$i+1}}</td>
                <td class="{{$row['invalid_columns']['wbs']?'invalid':''}}">{{$row['wbs']}}</td>
                <td class="{{$row['invalid_columns']['title']?'invalid':''}}">{{$row['title']}}</td>
                <td class="{{$row['invalid_columns']['start']?'invalid':''}}">{{ $row['start']}}</td>
                <td class="{{$row['invalid_columns']['end']?'invalid':''}}">{{ $row['end']}}</td>
                <td class="{{$row['invalid_columns']['actual_start']?'invalid':''}}">{{ $row['actual_start']}}</td>
                <td class="{{$row['invalid_columns']['actual_end']?'invalid':''}}">{{ $row['actual_end']}}</td>
                <td class="{{$row['invalid_columns']['description']?'invalid':''}}">{{$row['description']}}</td>
            </tr>
        @endforeach
    </tbody>
</table>