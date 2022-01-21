<table>
    <thead>
        <tr>
            <th>wbs</th>
            <th>title</th>
            <th>start</th>
            <th>end</th>
            <th>days</th>
            <th>actual_start</th>
            <th>actual_end</th>
            <th>progress</th>
            <th>work days</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($project->columns  as $i => $list)
            <tr style="background-color:#e3e3e3">
                <td style="text-align: left;">{{$i+1}}</td>
                <td>{{$list->title}}</td>
                <td>{{ \Carbon\Carbon::parse($list->start)->isoformat('YYYY-MM-DD')}}</td>
                <td>{{ \Carbon\Carbon::parse($list->end)->isoformat('YYYY-MM-DD')}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
            @foreach ($list->cards as $j => $task)
                @php
                    $task_days='';
                    $task_work_days='';
                    if($task->start && $task->end){
                        $actual_start = \Carbon\Carbon::parse($task->actual_start);
                        $actual_end = \Carbon\Carbon::parse($task->actual_end);
                        $task_days= $actual_start->diffInDays($actual_end);
                        $work_days= $actual_start->diffInDays($actual_end);
                    }
                @endphp
                <tr>
                    <td style="text-align: left;">{{$i+1}}.{{$j+1}}</td>
                    <td>{{$task->title}}</td>
                    <td>{{ \Carbon\Carbon::parse($task->start)->isoformat('YYYY-MM-DD')}}</td>
                    <td>{{ \Carbon\Carbon::parse($task->end)->isoformat('YYYY-MM-DD')}}</td>
                    <td>{{$task_days}}</td>
                    <td>{{ \Carbon\Carbon::parse($list->actual_start)->isoformat('YYYY-MM-DD')}}</td>
                    <td>{{ \Carbon\Carbon::parse($list->actual_end)->isoformat('YYYY-MM-DD')}}</td>
                    <td>{{$task->progress}}</td>
                    <td>{{$task_work_days}}</td>
                    <td>{{$task->start_label}}</td>
                    <td>{{$task->end_label}}</td>
                </tr>
                @foreach ($task->cards  as $k => $subtask)
                    @php
                        $subtask_days='';
                        $subtask_work_days='';
                        if($task->start && $task->end){
                            $actual_start = \Carbon\Carbon::parse($task->actual_start);
                            $actual_end = \Carbon\Carbon::parse($task->actual_end);
                            $subtask_days= $actual_start->diffInDays($actual_end);
                            $subtask_work_days= $actual_start->diffInDays($actual_end);
                        }
                    @endphp
                    <tr>
                        <td style="text-align: left;">{{$i+1}}.{{$j+1}}.{{$k+1}}</td>
                        <td>{{$subtask->title}}</td>
                        <td>{{ \Carbon\Carbon::parse($subtask->start)->isoformat('YYYY-MM-DD')}}</td>
                        <td>{{ \Carbon\Carbon::parse($subtask->end)->isoformat('YYYY-MM-DD')}}</td>
                        <td>{{$subtask_days}}</td>
                        <td>{{ \Carbon\Carbon::parse($subtask->actual_start)->isoformat('YYYY-MM-DD')}}</td>
                        <td>{{ \Carbon\Carbon::parse($subtask->actual_end)->isoformat('YYYY-MM-DD')}}</td>
                        <td>{{$subtask->progress}}</td>
                        <td>{{$subtask_work_days}}</td>
                        <td>{{$subtask->start_label}}</td>
                        <td>{{$subtask->end_label}}</td>
                    </tr>
                @endforeach
            @endforeach
        @endforeach
    </tbody>
</table>