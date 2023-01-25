import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType("WorkspaceCount", {
  isAbstract: true
})
export class WorkspaceCount {
  @Field(() => Int, {
    nullable: false
  })
  projects!: number;
}
