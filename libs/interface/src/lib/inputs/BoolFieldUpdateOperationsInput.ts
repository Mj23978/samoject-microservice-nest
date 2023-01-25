import { Field, InputType } from "@nestjs/graphql";


@InputType("BoolFieldUpdateOperationsInput", {
  isAbstract: true
})
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, {
    nullable: true
  })
  set?: boolean | undefined;
}
