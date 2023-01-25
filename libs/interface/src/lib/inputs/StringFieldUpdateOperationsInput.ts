import { Field, InputType } from "@nestjs/graphql";

@InputType("StringFieldUpdateOperationsInput", {
  isAbstract: true
})
export class StringFieldUpdateOperationsInput {
  @Field(() => String, {
    nullable: true
  })
  set?: string | undefined;
}
