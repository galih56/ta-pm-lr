

@if ($data->hasPages())
<nav class="mt-4">
    <ul class="pagination">
        @if ($data->onFirstPage())
            <li class="page-item disabled" aria-disabled="true" aria-label="« Previous" >
                <span class="page-link" aria-hidden="true">&laquo;</span>
            </li>
        @else
            <li class="page-item">
                <a class="page-link" href="{{ $data->previousPageUrl() }}" rel="prev">&laquo;</a>
            </li>
        @endif
        @if($data->currentPage() > 3)
            <li class="page-item">
                <a class="page-link" href="{{ $data->url(1) }}">1</a>
            </li>
        @endif
        @if($data->currentPage() > 4)
            <li class="page-item disabled">
                <span class="page-link">...</span>
            </li>
        @endif
        @foreach(range(1, $data->lastPage()) as $i)
            @if($i >= $data->currentPage() - 2 
                && $i <= $data->currentPage() + 2)
                @if ($i == $data->currentPage())
                    <li class="page-item active">
                        <span class="page-link">{{ $i }}</span>
                    </li>
                @else
                    <li class="page-item">
                        <a class="page-link" href="{{ $data->url($i) }}">{{ $i }}</a>
                    </li>
                @endif
            @endif
        @endforeach
        @if($data->currentPage() < $data->lastPage() - 3)
            <li class="page-item disabled">
                <span class="page-link">...</span>
            </li>
        @endif
        @if($data->currentPage() < $data->lastPage() - 2)
            <li class="page-item">
                <a class="page-link" href="{{ $data->url($data->lastPage()) }}">{{ $data->lastPage() }}</a>
            </li>
        @endif
        @if ($data->hasMorePages())
            <li class="page-item" rel="next" aria-label="Next »">
                <a class="page-link" href="{{ $data->nextPageUrl() }}" rel="next">&raquo;</a>
            </li>
        @else
            <li class="page-item disabled"><span  class="page-link" aria-hidden="true">&raquo;</span></li>
        @endif
    </ul>
</nav>
@endif