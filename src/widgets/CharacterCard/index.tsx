import { useState } from 'react';

import { Link } from 'react-router-dom';

import { CheckMarkIcon, CloseIcon, EditIcon } from '@/assets/icons';
import { Select, StatusDot, TextField } from '@/components';
import { STATUS_OPTIONS } from '@/constants';
import { classNames } from '@/helpers';
import type { Character, CharacterStatus } from '@/types';

import styles from './styles.module.scss';
import type { EditableFields } from './types';

interface Props {
  character: Character;
  onSave?: (fields: EditableFields) => void;
}

export const CharacterCard = ({ character, onSave }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(character.name);
  const [locationName, setLocationName] = useState(character.location.name);
  const [status, setStatus] = useState<CharacterStatus>(character.status);

  const handleSave = () => {
    onSave?.({ name, locationName, status });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(character.name);
    setLocationName(character.location.name);
    setStatus(character.status);
    setIsEditing(false);
  };

  const statusLabel =
    STATUS_OPTIONS.find((o) => o.value === status)?.label ?? status;

  return (
    <div className={styles.card}>
      {!isEditing && (
        <Link
          to={`/character/${character.id}`}
          className={styles.cardLink}
          aria-label={name}
        />
      )}
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <div className={styles.info}>
        <div className={classNames(styles.header, isEditing && styles.editing)}>
          <div className={styles.nameWrapper}>
            {isEditing ? (
              <TextField
                variant='underlined'
                value={name}
                onChange={setName}
              />
            ) : (
              <span className={styles.name}>{name}</span>
            )}
          </div>
          {isEditing ? (
            <div className={styles.actions}>
              <button
                type='button'
                className={styles.cancelButton}
                onClick={handleCancel}
                aria-label='Cancel'
              >
                <CloseIcon />
              </button>
              <button
                type='button'
                className={styles.saveButton}
                onClick={handleSave}
                aria-label='Save'
              >
                <CheckMarkIcon />
              </button>
            </div>
          ) : (
            <button
              type='button'
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
              aria-label='Edit'
            >
              <EditIcon />
            </button>
          )}
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <span className={styles.label}>Gender</span>
            <span className={styles.value}>{character.gender}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Species</span>
            <span className={styles.value}>{character.species}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Location</span>
            {isEditing ? (
              <TextField
                variant='underlined'
                size='small'
                className={styles.locationField}
                value={locationName}
                onChange={setLocationName}
              />
            ) : (
              <span className={styles.value}>{locationName}</span>
            )}
          </div>
          <div className={styles.field}>
            <span className={styles.label}>Status</span>
            {isEditing ? (
              <Select
                options={STATUS_OPTIONS}
                value={status}
                onChange={setStatus}
                size='small'
              />
            ) : (
              <span className={classNames(styles.value, styles.valueWithIcon)}>
                {statusLabel}
                <StatusDot status={status} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
