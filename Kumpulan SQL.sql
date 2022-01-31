
-- Tampilkan semua tasks,subtasks, dan lists
SELECT tasks.id, tasks.title AS tasks_title,tasks.actual_start,tasks.actual_end, tasks.start_label,tasks.end_label,tasks.parent_task_id, 
	parent_task.tasks_title AS parent_task_title, coalesce(parent_task.lists_title,lists.title) AS lists_title, coalesce(parent_task.projects_title,projects.title) AS projects_title, 
	tasks.progress AS tasks_progress, lists.progress AS lists_progress, projects.progress AS projects_progress 
	FROM public.tasks
	LEFT JOIN (	
				SELECT tasks.id, tasks.title AS tasks_title, tasks.parent_task_id, tasks.lists_id, lists.title AS lists_title, lists.projects_id, projects.title AS projects_title
			   	FROM public.tasks
				LEFT JOIN lists ON tasks.lists_id=lists.id
				LEFT JOIN projects ON lists.projects_id=projects.id
	) AS parent_task 
	ON tasks.parent_task_id=parent_task.id
	LEFT JOIN lists ON tasks.lists_id=lists.id
	LEFT JOIN projects ON lists.projects_id=projects.id;

-- Tampilkan list dan task untuk project tertentu
SELECT lists.id, lists.title,tasks.id, tasks.title,lists.projects_id
	FROM public.lists 
	left join tasks on tasks.lists_id=lists.id
	left join (select * from tasks) as subtasks on tasks.id=subtasks.parent_task_id 
	where projects_id=2;
    -- Tampilkan project members untuk project tertentu
SELECT id, users_id, projects_id, updated_at, created_at
	FROM public.project_members WHERE projects_id=2;
SELECT clients_id, projects_id, id
	FROM public.clients_has_projects;