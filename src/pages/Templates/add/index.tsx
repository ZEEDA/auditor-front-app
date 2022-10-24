import React, { useRef, useState } from "react";
import PageHeader from "../../../shared/page-header";
import styles from "./index.module.scss";

type Props = {};
type TemplateType = {
  title: string;
  description: string;
};

const AddTemplate: React.FC<Props> = ({}) => {
  const initialTemplateValues: TemplateType = {
    title: "",
    description: "",
  };
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const [template, setTemplate] = useState<TemplateType>(initialTemplateValues);
  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);

  const setEditableValue = (_val: string, _type: string) => {
    setTemplate({ ...template, ...{ [_type]: _val } });
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: string
  ) => {
    console.log(e.code);
    if (e.code == "Escape") {
      setEditTitle(false);
      setEditDescription(false);
      return;
    }
    if (e.code == "Enter") {
      submitEditable(e.currentTarget.value, type);
    }
  };

  const submitEditable = (_val: string, _type: string) => {
    setEditableValue(_val, _type);
    switch (_type) {
      case "title":
        setEditTitle(false);
        break;
      case "description":
        setEditDescription(false);
        break;
      default:
        setEditTitle(false);
        setEditDescription(false);
        break;
    }
  };

  return (
    <>
      <PageHeader title="Back to list" subtitle="Auto Save document" />
      <main className={styles.container}>
        <div className={styles.pageTitle}>
          <h1 className={styles.title}>Build Template</h1>
        </div>
        <div className={styles.templateInfoWrapper}>
          <div className={styles.innerContent}>
            <div className={styles.editableInputWrapper}>
              {editTitle ? (
                <div className={styles.editableInput}>
                  <input
                    ref={titleInputRef}
                    className={styles.formControl}
                    type="text"
                    placeholder="Add template title..."
                    value={template.title || ""}
                    onKeyDown={(e) => {
                      handleKeyPress(e, "title");
                    }}
                    onChange={(e) => {
                      setEditableValue(e.target.value, "title");
                    }}
                  />
                  <div className={styles.actions}>
                    <button
                      className={`btn btn-primary ${styles.inputSave}`}
                      onClick={(e) => {
                        submitEditable(template.title, "title");
                      }}
                    >
                      <span className={styles.icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 8V16"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 12H16"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                <h2
                  className={styles.title}
                  onClick={() => {
                    setEditTitle(true);
                    setTimeout(() => {
                      titleInputRef.current?.focus();
                    }, 100);
                  }}
                >
                  {template.title || "Title of the Template Here..."}
                </h2>
              )}
            </div>
            <div className={styles.editableInputWrapper}>
              {editDescription ? (
                <div className={styles.editableInput}>
                  <input
                    ref={descriptionInputRef}
                    className={styles.formControl}
                    type="text"
                    placeholder="Add description..."
                    value={template.description || ""}
                    onKeyDown={(e) => {
                      handleKeyPress(e, "description");
                    }}
                    onChange={(e) => {
                      setEditableValue(e.target.value, "description");
                    }}
                  />
                  <div className={styles.actions}>
                    <button
                      className={`btn btn-primary ${styles.inputSave}`}
                      onClick={(e) => {
                        submitEditable(template.description, "description");
                      }}
                    >
                      <span className={styles.icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 8V16"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 12H16"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      Add
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  className={styles.subtitle}
                  onClick={() => {
                    setEditDescription(true);
                    setTimeout(() => {
                      descriptionInputRef.current?.focus();
                    }, 100);
                  }}
                >
                  {template.description ||
                    "Description of the Template Here..."}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddTemplate;
