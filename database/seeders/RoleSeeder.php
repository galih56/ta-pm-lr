<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Occupation;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles=[
            ['id'=>1,'name' => 'Project Owner','root'=>true],
            ['id'=>2,'name' => 'System Administrator'],
            ['id'=>3,'name' => 'Bendahara'],
            ['id'=>4,'name' => 'Manager'],
            ['id'=>5,'name' => 'Project Manager'],
            ['id'=>6,'name' => 'Analyst'],
            ['id'=>7,'name' => 'Senior Developer'],
            ['id'=>8,'name' => 'Junior Developer'],
            ['id'=>9,'name' => 'Project Support'],
            ['id'=>10,'name' => 'Senior Programmer'],
            ['id'=>11,'name' => 'Junior Programmer'],
            ['id'=>12,'name' => 'Surveyor'],
            ['id'=>13,'name' => 'Researcher']  
        ];
        foreach ($roles as $i => $role) {
            $occ=new Occupation();
            $occ->id=$role['id'];
            $occ->name=$role['name'];
            $occ->save();
        }
    }
}
