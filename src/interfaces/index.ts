export interface Activity {
  id: number
  created_at: string
  title: string
}

export interface ToDoItem {
  id: number
  title: string
  priority: string
  is_active: number
  activity_group_id: number
}